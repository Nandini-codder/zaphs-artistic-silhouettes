export type PhotoType = {
  id: number;
  title: string;
  category: 'boudoir' | 'fine-nude-art' | 'fashion';
  imageUrl: string;
  description: string;
  year: number;
  width: number;
  height: number;
};

export const photos: PhotoType[] = [
  {
    id: 1,
    title: "Silhouette Study",
    category: "fine-nude-art",
    imageUrl: "/lovable-uploads/set-1/485083272_1366567581437924_3956986898790989309_n.jpg",
    description: "A minimalist study of form and light using silhouette technique.",
    year: 2023,
    width: 1080,
    height: 1350
  },
  {
    id: 2,
    title: "Elegant Pose",
    category: "boudoir",
    imageUrl: "/lovable-uploads/set-1/485380124_23886389040959248_6685848319084993930_n.jpg",
    description: "Subtle interplay of light and shadow creating an intimate portrait.",
    year: 2022,
    width: 1080,
    height: 1350
  },
  {
    id: 3,
    title: "Contemplation",
    category: "fashion",
    imageUrl: "/lovable-uploads/set-1/485503713_596287023417347_9113024219148745693_n.jpg",
    description: "High fashion portrait exploring the boundaries of light and expression.",
    year: 2023,
    width: 1080,
    height: 1350
  },
  {
    id: 4,
    title: "Form Study #1",
    category: "fine-nude-art",
    imageUrl: "/lovable-uploads/set-1/485826122_1850320022454072_2149154549007138107_n.jpg",
    description: "Exploration of the human form with dramatic lighting.",
    year: 2021,
    width: 1080,
    height: 1350
  },
  {
    id: 5,
    title: "Elegance in Shadow",
    category: "boudoir",
    imageUrl: "/lovable-uploads/set-1/486062794_650411307909313_3849816689233517024_n.jpg",
    description: "A celebration of the gentle curves and shadows in intimate portraiture.",
    year: 2022,
    width: 1080,
    height: 1350
  },
  {
    id: 6,
    title: "Haute Contrast",
    category: "fashion",
    imageUrl: "/lovable-uploads/set-1/487134009_1896032724474711_586032698278395963_n.jpg",
    description: "Bold fashion statement with striking contrast and composition.",
    year: 2023,
    width: 1080,
    height: 1350
  },
  {
    id: 7,
    title: "Moody Portrait",
    category: "boudoir",
    imageUrl: "/lovable-uploads/set-2/485390845_1186234243229547_7507999594619464842_n.jpg",
    description: "Atmospheric portrait with deep shadows and soft highlights.",
    year: 2023,
    width: 1080,
    height: 1350
  },
  {
    id: 8,
    title: "Dramatic Lighting",
    category: "fine-nude-art",
    imageUrl: "/lovable-uploads/set-2/485945036_1162769038392877_2404115499179104476_n.jpg",
    description: "Study of dramatic lighting techniques on the human form.",
    year: 2023,
    width: 1080,
    height: 1350
  },
  {
    id: 9,
    title: "Fashion Forward",
    category: "fashion",
    imageUrl: "/lovable-uploads/set-2/485993844_9614369481978132_1433484815216045314_n.jpg",
    description: "Contemporary fashion portrait with bold styling.",
    year: 2023,
    width: 1080,
    height: 1350
  },
  {
    id: 10,
    title: "Intimate Moment",
    category: "boudoir",
    imageUrl: "/lovable-uploads/set-2/486082811_503853509464952_871670714200561882_n.jpg",
    description: "Capturing a private moment with delicate lighting.",
    year: 2023,
    width: 1080,
    height: 1350
  },
  {
    id: 11,
    title: "Abstract Form",
    category: "fine-nude-art",
    imageUrl: "/lovable-uploads/set-2/486220546_905089191625387_8442825805860098502_n.jpg",
    description: "Abstract composition focusing on shape and negative space.",
    year: 2023,
    width: 1080,
    height: 1350
  },
  {
    id: 12,
    title: "Urban Fashion",
    category: "fashion",
    imageUrl: "/lovable-uploads/set-2/486624203_885352883652636_6159608972926235764_n.jpg",
    description: "Street fashion portrait with urban backdrop.",
    year: 2023,
    width: 1080,
    height: 1350
  },
  {
    id: 13,
    title: "Soft Silhouette",
    category: "boudoir",
    imageUrl: "/lovable-uploads/set-2/486662991_1023298989691297_7180558030620992476_n.jpg",
    description: "Gentle silhouette study with soft lighting.",
    year: 2023,
    width: 1080,
    height: 1350
  }
];
