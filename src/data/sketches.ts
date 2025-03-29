
export type SketchType = {
  id: number;
  title: string;
  category: 'figure' | 'portrait' | 'study';
  imageUrl: string;
  description: string;
  year: number;
  medium: string;
};

export const sketches: SketchType[] = [
  {
    id: 1,
    title: "Reclining Figure",
    category: "figure",
    imageUrl: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8c2tldGNoLWZpZ3VyZXx8fHx8fDE3MTc2MjAxMjk&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Charcoal study of a reclining figure exploring light and form.",
    year: 2023,
    medium: "Charcoal on paper"
  },
  {
    id: 2,
    title: "Gesture Study #3",
    category: "study",
    imageUrl: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8c2tldGNoLWZpZ3VyZXx8fHx8fDE3MTc2MjAxNjM&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Quick gesture study capturing movement and energy.",
    year: 2022,
    medium: "Graphite on paper"
  },
  {
    id: 3,
    title: "Portrait in Profile",
    category: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1603143285586-6383408bd1dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8c2tldGNoLXBvcnRyYWl0fHx8fHx8MTcxNzYyMDE5MQ&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Profile portrait study focusing on facial structure and expression.",
    year: 2023,
    medium: "Pencil on paper"
  },
  {
    id: 4,
    title: "Form and Shadow",
    category: "figure",
    imageUrl: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8c2tldGNoLWZpZ3VyZXx8fHx8fDE3MTc2MjAyMTk&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Study of the human form with emphasis on shadow work.",
    year: 2021,
    medium: "Charcoal and white chalk on toned paper"
  },
  {
    id: 5,
    title: "Contemplative",
    category: "portrait",
    imageUrl: "https://images.unsplash.com/photo-1541512416146-3cf58d6b27cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8c2tldGNoLXBvcnRyYWl0fHx8fHx8MTcxNzYyMDI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Detailed portrait exploring emotion and introspection.",
    year: 2022,
    medium: "Graphite on paper"
  },
  {
    id: 6,
    title: "Dynamic Pose",
    category: "study",
    imageUrl: "https://images.unsplash.com/photo-1588685562821-d53e1db01b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxfDB8MXxyYW5kb218MHx8c2tldGNoLWZpZ3VyZXx8fHx8fDE3MTc2MjAyODM&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Quick study capturing the energy and flow of movement.",
    year: 2023,
    medium: "Ink on paper"
  }
];
