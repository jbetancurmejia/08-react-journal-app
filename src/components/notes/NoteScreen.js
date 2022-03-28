import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes_content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes_title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="what happened today"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
          // src="https://phantom-marca.unidadeditorial.es/634901a1e03e84168bfccc628cb263fd/crop/0x152/2046x1300/resize/1320/f/jpg/assets/multimedia/imagenes/2021/01/21/16112406024829.jpg"
          alt="imagen"
          className="pointer"
          style={{width:'120', height:120}}
          />
        </div>
      </div>
    </div>
  );
};
