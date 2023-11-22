import React from 'react';

function Movie (props){
    const {Title, Year, Poster,Type} = props;
    return <div className="movie">
          <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={Poster} alt = {Title}/>
          <span class="card-title">{Title}</span>
        </div>
        <div class="card-content">
          <p>Год выпуска: {Year}</p>
        </div>
        <div class="card-action">
          <p>Тип: {Type}</p>
        </div>
      </div>
    </div>
  </div>
    </div>
}

export {Movie}