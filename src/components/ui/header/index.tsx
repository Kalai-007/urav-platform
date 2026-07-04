import React from 'react';
import {navigation} from "./Header.constants"

export default function Header(){
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <img src={"/assets/logo"} alt={"header"} className="h-8"/>
        <nav className="hidden md:flex gap-6">
          {navigation?.map(i=>(
            <a key={i.id} href={i.href} className="hover:text-blue-600">{i.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
