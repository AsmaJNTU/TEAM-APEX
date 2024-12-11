export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        
        <h2>Feature products</h2>
        {children}
        </>
    );
}

