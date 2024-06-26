import styled from "styled-components";
import { CiFilter } from "react-icons/ci";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import FilterSidebar from "../components/FilterSidebar";
import ProductCardList from "../components/ProductCardList";
import { useState } from "react";

const searchList = [
  {
    id: 29,
    title: "Mid-Century Modern Wooden Dining Table",
    price: 24,
    description:
      "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    images: [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 30,
    title: "Elegant Golden-Base Stone Top Dining Table",
    price: 66,
    description:
      "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    images: [
      "https://i.imgur.com/NWIJKUj.jpeg",
      "https://i.imgur.com/Jn1YSLk.jpeg",
      "https://i.imgur.com/VNZRvx5.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 31,
    title: "Modern Elegance Teal Armchair",
    price: 25,
    description:
      "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    images: [
      "https://i.imgur.com/6wkyyIN.jpeg",
      "https://i.imgur.com/Ald3Rec.jpeg",
      "https://i.imgur.com/dIqo03c.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 32,
    title: "Elegant Solid Wood Dining Table",
    price: 67,
    description:
      "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    images: [
      "https://i.imgur.com/4lTaHfF.jpeg",
      "https://i.imgur.com/JktHE1C.jpeg",
      "https://i.imgur.com/cQeXQMi.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 33,
    title: "Modern Minimalist Workstation Setup",
    price: 49,
    description:
      "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    images: [
      "https://i.imgur.com/3oXNBst.jpeg",
      "https://i.imgur.com/ErYYZnT.jpeg",
      "https://i.imgur.com/boBPwYW.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 39,
    title: "Vibrant Pink Classic Sneakers",
    price: 84,
    description:
      "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    images: [
      "https://i.imgur.com/mcW42Gi.jpeg",
      "https://i.imgur.com/mhn7qsF.jpeg",
      "https://i.imgur.com/F8vhnFJ.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 41,
    title: "Futuristic Chic High-Heel Boots",
    price: 36,
    description:
      "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    images: [
      "https://i.imgur.com/HqYqLnW.jpeg",
      "https://i.imgur.com/RlDGnZw.jpeg",
      "https://i.imgur.com/qa0O6fg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 42,
    title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    price: 53,
    description:
      "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    images: [
      "https://i.imgur.com/AzAY4Ed.jpeg",
      "https://i.imgur.com/umfnS9P.jpeg",
      "https://i.imgur.com/uFyuvLg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 29,
    title: "Mid-Century Modern Wooden Dining Table",
    price: 24,
    description:
      "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    images: [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 30,
    title: "Elegant Golden-Base Stone Top Dining Table",
    price: 66,
    description:
      "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    images: [
      "https://i.imgur.com/NWIJKUj.jpeg",
      "https://i.imgur.com/Jn1YSLk.jpeg",
      "https://i.imgur.com/VNZRvx5.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 31,
    title: "Modern Elegance Teal Armchair",
    price: 25,
    description:
      "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    images: [
      "https://i.imgur.com/6wkyyIN.jpeg",
      "https://i.imgur.com/Ald3Rec.jpeg",
      "https://i.imgur.com/dIqo03c.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 32,
    title: "Elegant Solid Wood Dining Table",
    price: 67,
    description:
      "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    images: [
      "https://i.imgur.com/4lTaHfF.jpeg",
      "https://i.imgur.com/JktHE1C.jpeg",
      "https://i.imgur.com/cQeXQMi.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 33,
    title: "Modern Minimalist Workstation Setup",
    price: 49,
    description:
      "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    images: [
      "https://i.imgur.com/3oXNBst.jpeg",
      "https://i.imgur.com/ErYYZnT.jpeg",
      "https://i.imgur.com/boBPwYW.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 39,
    title: "Vibrant Pink Classic Sneakers",
    price: 84,
    description:
      "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    images: [
      "https://i.imgur.com/mcW42Gi.jpeg",
      "https://i.imgur.com/mhn7qsF.jpeg",
      "https://i.imgur.com/F8vhnFJ.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 41,
    title: "Futuristic Chic High-Heel Boots",
    price: 36,
    description:
      "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    images: [
      "https://i.imgur.com/HqYqLnW.jpeg",
      "https://i.imgur.com/RlDGnZw.jpeg",
      "https://i.imgur.com/qa0O6fg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 42,
    title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    price: 53,
    description:
      "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    images: [
      "https://i.imgur.com/AzAY4Ed.jpeg",
      "https://i.imgur.com/umfnS9P.jpeg",
      "https://i.imgur.com/uFyuvLg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 29,
    title: "Mid-Century Modern Wooden Dining Table",
    price: 24,
    description:
      "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    images: [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 30,
    title: "Elegant Golden-Base Stone Top Dining Table",
    price: 66,
    description:
      "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    images: [
      "https://i.imgur.com/NWIJKUj.jpeg",
      "https://i.imgur.com/Jn1YSLk.jpeg",
      "https://i.imgur.com/VNZRvx5.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 31,
    title: "Modern Elegance Teal Armchair",
    price: 25,
    description:
      "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    images: [
      "https://i.imgur.com/6wkyyIN.jpeg",
      "https://i.imgur.com/Ald3Rec.jpeg",
      "https://i.imgur.com/dIqo03c.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 32,
    title: "Elegant Solid Wood Dining Table",
    price: 67,
    description:
      "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    images: [
      "https://i.imgur.com/4lTaHfF.jpeg",
      "https://i.imgur.com/JktHE1C.jpeg",
      "https://i.imgur.com/cQeXQMi.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 33,
    title: "Modern Minimalist Workstation Setup",
    price: 49,
    description:
      "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    images: [
      "https://i.imgur.com/3oXNBst.jpeg",
      "https://i.imgur.com/ErYYZnT.jpeg",
      "https://i.imgur.com/boBPwYW.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 39,
    title: "Vibrant Pink Classic Sneakers",
    price: 84,
    description:
      "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    images: [
      "https://i.imgur.com/mcW42Gi.jpeg",
      "https://i.imgur.com/mhn7qsF.jpeg",
      "https://i.imgur.com/F8vhnFJ.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 41,
    title: "Futuristic Chic High-Heel Boots",
    price: 36,
    description:
      "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    images: [
      "https://i.imgur.com/HqYqLnW.jpeg",
      "https://i.imgur.com/RlDGnZw.jpeg",
      "https://i.imgur.com/qa0O6fg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 42,
    title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    price: 53,
    description:
      "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    images: [
      "https://i.imgur.com/AzAY4Ed.jpeg",
      "https://i.imgur.com/umfnS9P.jpeg",
      "https://i.imgur.com/uFyuvLg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 29,
    title: "Mid-Century Modern Wooden Dining Table",
    price: 24,
    description:
      "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    images: [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 30,
    title: "Elegant Golden-Base Stone Top Dining Table",
    price: 66,
    description:
      "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    images: [
      "https://i.imgur.com/NWIJKUj.jpeg",
      "https://i.imgur.com/Jn1YSLk.jpeg",
      "https://i.imgur.com/VNZRvx5.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 31,
    title: "Modern Elegance Teal Armchair",
    price: 25,
    description:
      "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    images: [
      "https://i.imgur.com/6wkyyIN.jpeg",
      "https://i.imgur.com/Ald3Rec.jpeg",
      "https://i.imgur.com/dIqo03c.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 32,
    title: "Elegant Solid Wood Dining Table",
    price: 67,
    description:
      "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    images: [
      "https://i.imgur.com/4lTaHfF.jpeg",
      "https://i.imgur.com/JktHE1C.jpeg",
      "https://i.imgur.com/cQeXQMi.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 33,
    title: "Modern Minimalist Workstation Setup",
    price: 49,
    description:
      "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    images: [
      "https://i.imgur.com/3oXNBst.jpeg",
      "https://i.imgur.com/ErYYZnT.jpeg",
      "https://i.imgur.com/boBPwYW.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 39,
    title: "Vibrant Pink Classic Sneakers",
    price: 84,
    description:
      "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    images: [
      "https://i.imgur.com/mcW42Gi.jpeg",
      "https://i.imgur.com/mhn7qsF.jpeg",
      "https://i.imgur.com/F8vhnFJ.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 41,
    title: "Futuristic Chic High-Heel Boots",
    price: 36,
    description:
      "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    images: [
      "https://i.imgur.com/HqYqLnW.jpeg",
      "https://i.imgur.com/RlDGnZw.jpeg",
      "https://i.imgur.com/qa0O6fg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 42,
    title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    price: 53,
    description:
      "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    images: [
      "https://i.imgur.com/AzAY4Ed.jpeg",
      "https://i.imgur.com/umfnS9P.jpeg",
      "https://i.imgur.com/uFyuvLg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 29,
    title: "Mid-Century Modern Wooden Dining Table",
    price: 24,
    description:
      "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    images: [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 30,
    title: "Elegant Golden-Base Stone Top Dining Table",
    price: 66,
    description:
      "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    images: [
      "https://i.imgur.com/NWIJKUj.jpeg",
      "https://i.imgur.com/Jn1YSLk.jpeg",
      "https://i.imgur.com/VNZRvx5.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 31,
    title: "Modern Elegance Teal Armchair",
    price: 25,
    description:
      "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    images: [
      "https://i.imgur.com/6wkyyIN.jpeg",
      "https://i.imgur.com/Ald3Rec.jpeg",
      "https://i.imgur.com/dIqo03c.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 32,
    title: "Elegant Solid Wood Dining Table",
    price: 67,
    description:
      "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    images: [
      "https://i.imgur.com/4lTaHfF.jpeg",
      "https://i.imgur.com/JktHE1C.jpeg",
      "https://i.imgur.com/cQeXQMi.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 33,
    title: "Modern Minimalist Workstation Setup",
    price: 49,
    description:
      "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    images: [
      "https://i.imgur.com/3oXNBst.jpeg",
      "https://i.imgur.com/ErYYZnT.jpeg",
      "https://i.imgur.com/boBPwYW.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 39,
    title: "Vibrant Pink Classic Sneakers",
    price: 84,
    description:
      "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    images: [
      "https://i.imgur.com/mcW42Gi.jpeg",
      "https://i.imgur.com/mhn7qsF.jpeg",
      "https://i.imgur.com/F8vhnFJ.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 41,
    title: "Futuristic Chic High-Heel Boots",
    price: 36,
    description:
      "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    images: [
      "https://i.imgur.com/HqYqLnW.jpeg",
      "https://i.imgur.com/RlDGnZw.jpeg",
      "https://i.imgur.com/qa0O6fg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 42,
    title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    price: 53,
    description:
      "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    images: [
      "https://i.imgur.com/AzAY4Ed.jpeg",
      "https://i.imgur.com/umfnS9P.jpeg",
      "https://i.imgur.com/uFyuvLg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 41,
    title: "Futuristic Chic High-Heel Boots",
    price: 36,
    description:
      "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    images: [
      "https://i.imgur.com/HqYqLnW.jpeg",
      "https://i.imgur.com/RlDGnZw.jpeg",
      "https://i.imgur.com/qa0O6fg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 42,
    title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    price: 53,
    description:
      "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    images: [
      "https://i.imgur.com/AzAY4Ed.jpeg",
      "https://i.imgur.com/umfnS9P.jpeg",
      "https://i.imgur.com/uFyuvLg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
];

const Search = () => {
  const [showFilterInSm, setShowFilterInSm] = useState(false);

  return (
    <MainContainer>
      <Header>
        <Navbar />
      </Header>
      <Searchbar />
      <Main>
        <FilterBtn onClick={() => setShowFilterInSm((prevState) => !prevState)}>
          <CiFilter fontSize={25} />
          {showFilterInSm ? "Hide Filters" : "Show Filters"}
        </FilterBtn>
        <FilterSidebar showInSm={showFilterInSm} showInLg={false} />
        <FilterSidebar showInSm={false} showInLg={true} />
        <SearchResult>
          {searchList.map((product) => (
            <ProductCardList product={product} key={product.id} />
          ))}
        </SearchResult>
      </Main>
      <Footer></Footer>
    </MainContainer>
  );
};

export default Search;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;

  @media screen and (min-width: 1024px) {
    display: flex;
  }

  @media screen and (min-width: 1700px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FilterBtn = styled.button`
  box-shadow: 1px 1px 5px 1px #bfbfbf;
  position: sticky;
  top: 130px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  height: 40px;
  margin: 20px 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const SearchResult = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* @media screen and (min-width: 1024px) {
    padding: 0px 5%;
  } */
`;

const Footer = styled.footer`
  border: 2px solid blue;

  @media screen and (min-width: 1700px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`;
