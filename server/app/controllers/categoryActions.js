// Some data to make the trick
const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  // Action to browse categories
  const browseCategories = (req, res) => {
    res.json(categories);
  };
  
  // Action to read a specific category
  const readCategory = (req, res) => {
    const parsedId = parseInt(req.params.id, 10); 

    
    const category = categories.find((c) => c.id === parsedId);
  
    if (category != null) {
      res.json(category);
    } else {
      res.sendStatus(404);
    }
  };
  
  module.exports = { browseCategories, readCategory };
  