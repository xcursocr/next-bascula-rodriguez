import {
  BadgeDollarSign,
  ChartColumnStacked,
  CircleParking,
  ContactRound,
  Eye,
  House,
  IdCard,
} from "lucide-react";

export const mainMenu = [
  {
    href: "/",
    label: "Home",
    icon: <House size={16} />,
  },
  {
    href: "/productos",
    label: "Productos",
    icon: <CircleParking size={16} />,
    submenu: [
      {
        href: "/categoria1",
        label: "Categoría 1",
        icon: <ChartColumnStacked size={16} />,
      },
      {
        href: "/categoria2",
        label: "Categoría 2",
        icon: <ChartColumnStacked size={16} />,
      },
    ],
  },
  {
    href: "/nosotros",
    label: "Nosotros",
    icon: <IdCard size={16} />,
    submenu: [
      {
        href: "/mision",
        label: "Misión",
        icon: <CircleParking size={16} />,
      },
      {
        href: "/vision",
        label: "Visión",
        icon: <Eye size={16} />,
      },
    ],
  },
  {
    href: "/contacto",
    label: "Contacto",
    icon: <ContactRound size={16} />,
  },
  { href: "/ofertas", label: "Ofertas", icon: <BadgeDollarSign size={16} /> },
];
