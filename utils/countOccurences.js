const countOccurences = (tab) => {
  // On parcours le tableau
  tab.map((x) => {
    if (x.status === 0 || x.status === 1) {
      console.log("reessayer");
      return false;
    }
    console.log("vous avez trouvé le mot secret");
    return true;
  });
};

export default countOccurences;
