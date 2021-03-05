const INITIAL_STATE = {
  sections: [
    {
      title: "Bonés",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/bones",
    },
    {
      title: "Jaquetas",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jaquetas",
    },
    {
      title: "Tênis",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/tenis",
    },
    {
      title: "Mulheres",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/mulheres",
    },
    {
      title: "Homens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/homens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TESTE":
      return "directory recuder";
    default:
      return state;
  }
};

export default directoryReducer;
