
module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    // getEverything: async (req, res) => {
    //   try {
    //     const items = await Item.find().sort({createdAt: "desc"}).lean();
    //     const survivors = await Survivor.find()
    //     res.json(items)
    //     res.json(survivors)
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    
}
  
  