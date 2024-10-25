import React from "react";
import { Tabs, Tab, Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import Courses from "./Content/module";
import { signOut, useSession } from "next-auth/react";
import { Avatar } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import AssignedModules from "./Content/AssignedModules";
import Users from "./Content/Users";
import CompletedModule from "./Content/CompletedModule";

export const Panel: React.FC = () => {
  const { data: session, status } = useSession(); // Use useSession to manage session state
  const isAdmin = session?.user?.role === 'administrator';
  const router = useRouter();

  // You can handle loading state if needed
  if (status === "loading") {
    return <div>Wczytywanie...</div>; // Show a loading indicator while session is being fetched
  }

  const Logout = async () => {
    try {
      const result = await signOut() as unknown;

      if (typeof result === 'object' && result !== null && 'error' in result) {
        const { error } = result as { error?: string };

        if (error) {
          // Handle error and display error messages
          console.error(error);
          // Set your custom error handling here (e.g. show a notification)
        } else {
          router.push('/kursy?id=51');
        }
      } else {
        // Handle unexpected result type
        console.error("Unexpected result type:", result);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      // Handle any unexpected errors (e.g. network issues)
    }
  };

  return (
    <div className="shadow-lg">
      <div className="bg-white flex flex-col gap-3">
        <div>
          <div className="bg-white flex flex-col gap-3 p-2 border-2 border-[#333]/25 shadow-lg">
            <Card radius="none" className="max-w-fit" shadow="none">
              <CardHeader>
                <div className="flex gap-4 items-center">
                  <Avatar showFallback src="https://images.unsplash.com/broken" />
                  <p className="flex flex-col text-pretty text-justify">
                    {session?.user.username}
                    <span className="text-tiny">{session?.user.role}</span>
                  </p>
                </div>
              </CardHeader>
              <CardBody className="mt-0 pt-1">
                <Button radius="none" color="danger" size="sm" variant="flat" onClick={Logout}>
                  Wyloguj się
                </Button>
              </CardBody>
            </Card>
            <Tabs
              aria-label="Options"
              color="primary"
              variant="underlined"
              classNames={{
                tabList: "gap-3 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-[#17822e]",
                tab: "max-w-fit h-12",
                tabContent: "group-data-[selected=true]:text-[#17822e]",
              }}
            >
              <Tab
                title={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 lucide lucide-book-open-check">
                    <path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" />
                    <path d="m16 12 2 2 4-4" />
                    <path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" />
                  </svg>
                }
              >
                <div className="flex flex-col gap-6">
                  <Courses />
                </div>
              </Tab>
              <Tab
                title={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package">
                    <path d="m7.5 4.27 9 5.15" />
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                }
              >
                <div className="flex flex-col gap-6">
                  <AssignedModules />
                </div>
              </Tab>
              {isAdmin && (
                <Tab
                  title={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round">
                      <path d="M18 21a8 8 0 0 0-16 0" />
                      <circle cx="10" cy="8" r="5" />
                      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                    </svg>
                  }
                >
                  <div className="flex flex-col gap-6">
                    <Users />
                  </div>
                </Tab>
              )}
              {!isAdmin && (
                <Tab
                  title={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
                  }
                >
                  <div className="flex flex-col gap-6">
                    <CompletedModule />
                  </div>
                  
                </Tab>
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
