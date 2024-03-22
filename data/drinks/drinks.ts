import menu1 from "./images/menu1.jpg.webp"
import menu2 from "./images/menu2.jpg.webp"
import menu3 from "./images/menu3.jpg.webp"
import menu4 from "./images/menu4.jpg.webp"
import drink1 from "./images/drink1.jpg"
import drink2 from "./images/drink2.jpg"
import drink3 from "./images/drink3.jpg"
import drink4 from "./images/drink4.jpg"

const drinks = [
    {
      id: 1,
      nameEn: "Iced Coffee",
      descriptionEn: "Refreshing coffee served over ice.",
      name: "قهوة مثلجة",
      description: "قهوة منعشة وصحية بقليل من الكافئين مقدمة فوق الثلج.",
      price: 4.99,
      image: menu1
    },
    {
      id: 2,
      nameEn: "Green Tea",
      descriptionEn: "Healthy green tea with antioxidants.",
      name: "شاي أخضر",
      description: "شاي أخضر صحي مع مضادات الأكسدة.",
      price: 3.99,
      image:menu2
    },
    {
      id: 3,
      nameEn: "Fresh Orange Juice",
      descriptionEn: "Freshly squeezed orange juice, rich in vitamin C.",
      name: "عصير برتقال طازج",
      description: "عصير البرتقال الطازج المعصور، غني بفيتامين سي.",
      price: 5.99,
      image: menu3
    },
    {
      id: 4,
      nameEn: "Fresh Orange KARAZ",
      descriptionEn: "Freshly LAZEEZ KARAZ juice, rich in vitamin D.",
      name: "عصير كرز طازج",
      description: "عصير الكرز الطازج المعصور، غني بفيتامين دي.",
      price: 3.99,
      image: menu3
    },
    {
      id: 5,
      nameEn: "Fresh Blue KARAZ",
      descriptionEn: "Freshly LAZEEZ Blue juice, rich in vitamin D.",
      name: "عصير أزرق طازج",
      description: "عصير الأزرق الطازج المعصور، غني بفيتامين دي.",
      price: 13.99,
      image: drink1
    },
    {
      id: 6,
      nameEn: "Fresh red KARAZ",
      descriptionEn: "Freshly LAZEEZ red juice, rich in vitamin D.",
      name: "عصير أحمر طازج",
      description: "عصير الأحمر الطازج المعصور، غني بفيتامين دي.",
      price: 8.99,
      image: drink2
    },
    {
      id: 7,
      nameEn: "Fresh Shot KARAZ",
      descriptionEn: "Freshly LAZEEZ Shot juice, rich in vitamin C.",
      name: "عصير شوتات طازج",
      description: "عصير الشوتات الطازج المعصور، غني بفيتامين سي.",
      price: 30.99,
      image: drink3
    },
    {
      id: 8,
      nameEn: "Fresh Mixed KARAZ",
      descriptionEn: "Freshly LAZEEZ Mixed juice, rich in vitamin D,C.",
      name: "عصير ميكسز طازج",
      description: " عصير الميكسز الطازج المعصور، غني بفيتامين دي وسي.",
      price: 43.99,
      image: menu2
    },
    // Add more objects for different drinks here
  ];
  export default drinks