import React from "react"
import classes from "./PageTemplate.module.css"

type PageProps = {
  children: React.ReactNode  // Correct type for children
  pageTitle?:string
  className?: string
  
}

const PageTemplate: React.FC<PageProps> = ({ className, children, pageTitle }) => (
    <div className={className + " flex w-screen min-h-screen justify-center"}>
        <div className="container mx-auto flex flex-col justify-start w-[100vw] h-[100vh] mt-[64px]">
            <h1 className={classes.pageTitle}>{pageTitle}</h1>
            {children}
        </div>
        
    </div>
)

export default PageTemplate
