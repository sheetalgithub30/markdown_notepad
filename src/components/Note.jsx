import React from "react";

export default function Note({ index, title, delNote, changeCurrent,isSelected}) {
  return (
    <>
    <button id="edit" onClick={() => {changeCurrent(index)}} className={isSelected ? "selected" :""}>
    <div id="new">
      <h3>{title}</h3>
      <i class="fa-solid fa-trash" onClick={() => delNote(index)} ></i>
      </div>
    </button>
    </>
  );
}