'use client'

import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import { useState } from "react"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
  return (
    <div>
        <Button type="button" onClick={() => setIsOpen(!isOpen)}>
            Register
        </Button>
        {isOpen? 
        <div>Open</div>
        :
        null}

        <Link href={'/todo'}>
          ToDoList
        </Link>
    </div>
  )
}

export default Header