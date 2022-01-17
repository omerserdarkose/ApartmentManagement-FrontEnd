import React from "react";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";


const SidebarData = [
  {
    title: "Ana Sayfa",
    path: "/admin/home",
    icon: <AiIcons.AiOutlineHome />,
  },
  {
    title: "Mesajlar",
    path: "/admin/messages",
    icon: <AiIcons.AiOutlineMail />,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,
    subNav: [
      {
        title: "Gelen Mesajlar",
        path: "/admin/messages/inbox",
        icon: <AiIcons.AiOutlineInbox />,
      },
      {
        title: "Giden Mesajlar",
        path: "/admin/messages/sent",
        icon: <AiIcons.AiOutlineInbox />,
      },
    ],
  },
  {
    title: "Giderler",
    path: "/admin/expenses",
    icon: <GiIcons.GiPayMoney />,
  },
  {
    title: "Kullanıcılar",
    path: "/admin/recipients",
    icon: <FiIcons.FiUsers/>,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,
    subNav: [
      {
        title: "Ev Sahipleri",
        path: "/admin/recipients/owners",
        icon: <GiIcons.GiQueenCrown />,
      },
      {
        title: "Kiracılar",
        path: "/admin/recipients/hirers",
        icon: <GiIcons.GiCrownedHeart />,
      },
    ],
  },
  {
    title: "Konutlar",
    path: "/admin/apartments",
    icon: <BsIcons.BsBuilding/>,
  },
  {
    title: "Ayarlar",
    path: "/admin/settings",
    icon: <AiIcons.AiTwotoneSetting/>,
    iconClosed: <RiIcons.RiArrowDownSLine />,
    iconOpened: <RiIcons.RiArrowUpSLine />,
    subNav: [
      {
        title: "Kullanıcı İşlemleri",
        path: "/admin/settings/users",
        icon: <RiIcons.RiUserSettingsFill />,    
      },
      {
        title: "Yetki İşlemleri",
        path: "/admin/settings/claims",
        icon: <GiIcons.GiKeyring/>,
      },
      {
        title: "Konut İşlemleri",
        path: "/admin/settings/apartments",
        icon: <MdIcons.MdApartment />,
      },
      {
        title: "Blok İşlemleri",
        path: "/admin/settings/blocks",
        icon: <RiIcons.RiBuilding4Line />,
      },
    ],
  },
];

export default SidebarData;
