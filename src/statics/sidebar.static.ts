import { ROUTES } from "~/constants";

export const SIDEBAR_ITEMS = [
  {
    groupName: "OVERVIEW",
    children: [
      {
        url: ROUTES.DASHBOARD_HOME,
        label: "Dashboard Overview",
        icon: "home",
      },
    ],
  },
  {
    groupName: "MANAGE",
    children: [
      {
        url: ROUTES.DASHBOARD_HOME,
        label: "Patients Management",
        icon: "user",
      },
      {
        url: ROUTES.DASHBOARD_HOME,
        label: "Appointment Schedules",
        icon: "calendar",
      },
      {
        url: ROUTES.DASHBOARD_HOME,
        label: "Prescription Records (EPR)",
        icon: "edit",
      },
      {
        url: ROUTES.DASHBOARD_HOME,
        label: "Offered Services",
        icon: "terminal",
      },
      {
        url: ROUTES.DASHBOARD_HOME,
        label: "Billings, Payments & Invoices",
        icon: "dollar-sign",
      },
      {
        url: ROUTES.DASHBOARD_HOME,
        label: "Inventory",
        icon: "truck",
      },
    ],
  },
];
