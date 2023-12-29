export function AffichageTableau({
  datas,
  isArc,
  isArme,
  isBouclier,
  IsIngredient,
  isVetement,
}) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Jeux</th>
            {isArme && <th>Type d'arme</th>}
            {isVetement && <th>Set</th>}
            <th>Nom</th>
            {(isArc || isBouclier) && (
              <>
                <th>Attaque</th>
                <th>Durabilité</th>
              </>
            )}
            {isArc && (
              <>
                <th>Portée</th>
                <th>Multiflêches</th>
                <th>Visée</th>
              </>
            )}
            {isArme && <th>Attaque de base</th>}
            {isArme && <th>Rang 1</th>}
            {isArme && <th>Rang 2</th>}
            {isArme && <th>Durabilité de base</th>}
            {isArme && <th>Rang 1</th>}
            {isArme && <th>Rang 2</th>}
            {isArme && <th>Effet de jet</th>}
            {isArme && <th>Base</th>}
            {isArme && <th>Bonus</th>}
            {(isArc || isArme || isBouclier) && <th>Disponibilité</th>}
            {isVetement && <th>Défense (min)</th>}
            {isVetement && <th>Défense (max)</th>}
            {isVetement && <th>Partie du corps</th>}
            {isVetement && <th>Localisation</th>}
            {isVetement && <th>Effet</th>}
            {isVetement && <th>Bonus de set</th>}
          </tr>
        </thead>
        <tbody>
          {datas?.map((data) => (
            <tr key={data.id}>
              <th>{data.jeux}</th>
              {isArme && <th>{data.typeArme}</th>}
              {isVetement && <th>{data.setVetement}</th>}
              <th>{data.nom}</th>
              {(isArc || isBouclier) && <th>{data.attaque}</th>}
              {(isArc || isBouclier) && <th>{data.durabilite}</th>}
              {isArc && <th>{data.portee}</th>}
              {isArc && <th>{data.multifleches}</th>}
              {isArc && <th>{data.visee}</th>}
              {isArme && <th>{data.attaqueBase}</th>}
              {isArme && <th>{data.attaqueRang1Max}</th>}
              {isArme && <th>{data.attaqueRang2Max}</th>}
              {isArme && <th>{data.durabiliteBase}</th>}
              {isArme && <th>{data.durabiliteRang1Max}</th>}
              {isArme && <th>{data.durabiliteRang2Max}</th>}
              {isArme && <th>{data.jetEffet}</th>}
              {isArme && <th>{data.jetBase}</th>}
              {isArme && <th>{data.jetBonus}</th>}
              {(isArc || isArme || isBouclier) && <th>{data.disponibilite}</th>}
              {isVetement && <th>{data.defMini}</th>}
              {isVetement && <th>{data.defMax}</th>}
              {isVetement && <th>{data.partieCorps}</th>}
              {isVetement && <th>{data.localisation}</th>}
              {isVetement && <th>{data.effet}</th>}
              {isVetement && <th>{data.bonusSet}</th>}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
