import React from 'react';

export default function Experience() {
  return (
    <div className='experience'>
      <h3 className='title-exp'> Expériences </h3>
      <div className='exp-1'>
        <h4>Formation développeur web - Wild Code School</h4>
        <h5>2021</h5>
        <p>
          Passionné de multimédias et supports technologiques, j'ai effectué une formation intensive de 5 mois en Javascript front-end afin de me
          réorienter professionellement.
          <br />
          Vous pouvez retrouver tous les projets, projet client et hackaton créés durant la formation sur la page Portfolio.
        </p>
        <br />

        <div className='cv-projet'>Site de présentation disponible sur mon Github</div>
      </div>
      <div className='exp-2'>
        <h4>Directeur de restaurant - COJEAN</h4>
        <h5>2009-2020</h5>
        <p>
          Manager une équipe.
          <br />
          Coordonner les plannings en fonction des postes à tenir et des compétences des employés.Tenir les engagements en terme de résultats et de
          délais.
          <br />
          Gestion des stocks et approvisionnements en fonction des besoins de l'établissement, relation fournisseurs, contrôle de la marchandise.
          Assurer les bonnes pratiques en qualité d'hygiène (normes HACCP) et de production.
          <br />
          Relation client: accueil, service, écoute.
        </p>
      </div>
      <div className='exp-3'>
        <h4>Charpentier - Compagnon du Devoir</h4>
        <h5>2003-2009</h5>
        <p>Conception d'épures, fabrication et pose de charpentes en ossatures bois et métalliques. Rénovations de planchés et éscaliers.</p>
      </div>
    </div>
  );
}
