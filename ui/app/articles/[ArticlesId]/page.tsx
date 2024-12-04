"use client";
import { useEffect, useState } from 'react'

export default function Page({ params }: { params: { ArticlesId: string } }) {
  const articles: any = {
    1: {
      title: "Le vrai coulant au chocolat",
      content: `Préparation :

            * Faites fondre au micro-ondes le chocolat noir cassé en morceaux avec le beurre.
            * Fouettez les œufs et le sucre jusqu’à ce que le mélange blanchisse et devienne mousseux. Incorporez le chocolat tiédi, mélangez bien.
            * Ajoutez ensuite la farine à la spatule en bois.
            * Répartissez la pâte dans des moules beurrés et farinés ou dans des cercles munis de papier sulfurisé.
            * Enfournez à th. 6-7/220° pendant 7 mn, puis laissez reposer 2 mn avant de démouler les coulants.`,
    },
    2: {
      title: "Meringue rapide",
      content: `Préparation :
            
            * Préchauffez le four à 100°C. Battez les blancs au fouet électrique.
            * Lorsque les blancs sont bien mousseux, ajoutez le sucre glace en pluie. Continuez de fouetter jusqu'à ce que les blancs soient bien fermes.
            * Sur une grille et du papier sulfurisé, disposez les meringues en petits tas à l'aide d'une cuillère ou d'une poche à douille.
            * Enfournez pendant environ 40 min.`,
    },
    3: {
      title: "Crêpes : la meilleure recette rapide",
      content: `Préparation :
            
            * Mettez la farine dans un saladier avec le sel et le sucre.
            * Faites un puits au milieu et versez-y les œufs.
            * Commencez à mélanger doucement. Quand le mélange devient épais, ajoutez le lait froid petit à petit.
            * Quand tout le lait est mélangé, la pâte doit être assez fluide. Si elle vous paraît trop épaisse, rajoutez un peu de lait. 
              Ajoutez ensuite le beurre fondu refroidi, mélangez bien.
            * Faites cuire les crêpes dans une poêle chaude (par précaution légèrement huilée si votre poêle à crêpes n'est pas anti-adhésive). 
              Versez une petite louche de pâte dans la poêle, faites un mouvement de rotation pour répartir la pâte sur toute la surface. 
              Posez sur le feu et quand le tour de la crêpe se colore en roux clair, il est temps de la retourner.
            * Laissez cuire environ une minute de ce côté et la crêpe est prête.
            * Pour finir :
                Répétez jusqu'à épuisement de la pâte.`,
    },
  };

  const articleId = params.ArticlesId;
  const article = articles[articleId];
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="wt-title">The Article: {params.ArticlesId}</h1>
      <h2>{article.title}</h2>
      <div className="text-xl indent-8 text-left">{article.content}</div>
      <h2>Like : <button onClick={() => setCount(count + 1)}>{count}</button></h2>
    </div>
  );
}
