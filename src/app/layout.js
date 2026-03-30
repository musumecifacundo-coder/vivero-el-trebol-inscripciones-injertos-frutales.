import "./globals.css";

export const metadata = {
  title: "Taller Práctico de Injertos | Vivero El Trébol",
  description: "Aprendé a injertar y llevate tus propias plantas frutales.",
  icons: {
    icon: '/logo_large.png',
    apple: '/logo_large.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
