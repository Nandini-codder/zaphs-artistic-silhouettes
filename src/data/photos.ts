
export type PhotoType = {
  id: number;
  title: string;
  category: 'boudoir' | 'fine-nude-art' | 'fashion';
  imageUrl: string;
  description: string;
  year: number;
};

export const photos: PhotoType[] = [
  {
    id: 1,
    title: "Silhouette Study",
    category: "fine-nude-art",
    imageUrl: "https://images.unsplash.com/photo-1621784562807-371630ccb835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8c2lsaG91ZXR0ZXx8fHx8fDE3MTc2MTk5NTM&ixlib=rb-4.0.3&q=80&w=1080",
    description: "A minimalist study of form and light using silhouette technique.",
    year: 2023
  },
  {
    id: 2,
    title: "Elegant Pose",
    category: "boudoir",
    imageUrl: "https://images.unsplash.com/photo-1542060748-10c28b62716f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8YmxhY2stYW5kLXdoaXRlLXBvcnRyYWl0fHx8fHx8MTcxNzYxOTg3Nw&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Subtle interplay of light and shadow creating an intimate portrait.",
    year: 2022
  },
  {
    id: 3,
    title: "Contemplation",
    category: "fashion",
    imageUrl: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8YmxhY2stYW5kLXdoaXRlLXBvcnRyYWl0fHx8fHx8MTcxNzYxOTkxOA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "High fashion portrait exploring the boundaries of light and expression.",
    year: 2023
  },
  {
    id: 4,
    title: "Form Study #1",
    category: "fine-nude-art",
    imageUrl: "https://images.unsplash.com/photo-1506881233061-4d2041aa1e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8c2lsaG91ZXR0ZXx8fHx8fDE3MTc2MjAwMDM&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Exploration of the human form with dramatic lighting.",
    year: 2021
  },
  {
    id: 5,
    title: "Elegance in Shadow",
    category: "boudoir",
    imageUrl: "https://images.unsplash.com/photo-1579111780133-cc2d963d8153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8YmxhY2stYW5kLXdoaXRlLXBvcnRyYWl0fHx8fHx8MTcxNzYyMDA0Mg&ixlib=rb-4.0.3&q=80&w=1080",
    description: "A celebration of the gentle curves and shadows in intimate portraiture.",
    year: 2022
  },
  {
    id: 6,
    title: "Haute Contrast",
    category: "fashion",
    imageUrl: "https://images.unsplash.com/photo-1614108831905-54db4bb2e038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8ZmFzaGlvbi1wb3J0cmFpdHx8fHx8fDE3MTc2MjAwODM&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Bold fashion statement with striking contrast and composition.",
    year: 2023
  }
];
