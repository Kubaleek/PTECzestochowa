import React from "react";
import { Tabs, Tab, Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
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
          <div className="bg-white flex flex-col px-3 py-2 gap-3 border-2 border-[#333]/25 shadow-lg">
            <Card radius="none" className="max-w-fit" shadow="none">
              <CardHeader className="px-0">
                <div className="flex gap-2 items-center">
                  <Avatar showFallback src="https://images.unsplash.com/broken" />
                  <p className="flex flex-col text-pretty text-justify">
                    {session?.user.username}
                    <span className="text-tiny">{session?.user.role}</span>
                  </p>
                </div>
              </CardHeader>
              <CardBody className="mt-0 pt-1 px-0">
                <Button radius="none" color="danger" size="sm" variant="flat" onClick={Logout}>
                  Wyloguj się
                </Button>
              </CardBody>
            </Card>
            <Divider />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <Courses />
              </div>
              <div className="flex flex-col gap-3">
                <AssignedModules />
              </div>
              {isAdmin && (
              <div className="flex flex-col gap-3">
                  <Users />
                </div>
              )}
              {!isAdmin && (
              <div className="flex flex-col gap-3">
                  <CompletedModule />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
