import SavingsIcon from '@mui/icons-material/Savings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';

interface Panel {
  title: string;
  about: About[];
}

interface About {
  title: string;
  icon: React.ComponentType; // Correct type for the icon component
}

export interface PanelListProps {
  panels: PanelList;
}

interface PanelList {
  [panelId: string]: Panel;
}

// about should be an array of About objects
const about: About[] = [
  {
    title: "Labor cost",
    icon: AttachMoneyIcon
  },
  {
    title: "Material cost",
    icon: CreditCardIcon
  },
  {
    title: "Other cost",
    icon: SavingsIcon
  },
]

export const panels: PanelList = {
  panel1: {
    title: "Szkolenia",
    about: about
  },
}