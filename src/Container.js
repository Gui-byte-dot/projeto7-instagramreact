import React from "react";
import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Feed from "./Feed";

export default function Container() {
  return (
    <div class="container">
      <div class="conteudo-principal">
        <Stories />
        <Feed />
      </div>
      <Sidebar />
    </div>

  )
}








