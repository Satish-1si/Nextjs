import NavBar from "../components/NavBar"
import "./Globalcss.css"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const navDetails=[
    {text:"About"  ,route:"/About"}
   ,{text:"Blogs"  ,route:"/blogs"}
   ,{text:"Contact",route:"/contact"}
   ,{text:"Product",route:"/product"}
]
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body>
        {<NavBar navDetails={navDetails}/>}
        {children}
        </body>
    </html>
  )
}
