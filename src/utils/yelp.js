const apiKey = '5aM89TmzyI3QUaUB66aNCzBxbc60tCFrV-69CzMZzFMBERbYsJqUyAKKqDhEbyoIMo25YNbiv_maQBgh6NIsHKlV1oGEDkvXBXVvBny2-kcTptSdqeNW7qGIY4x3ZHYx';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}` 
    }
  };

const Yelp = {
    async search(business, location, searchBy) {
        const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${business}&location=${location}&sort_by=${searchBy}`;

        return await fetch(url, options)
            .then(response => response.json())
            .then(JSONresponse => {
                let businesses = JSONresponse.businesses.map(function(obj) {
                    return {
                        imageSrc: obj.image_url, 
                        name: obj.name, 
                        address: obj.location.display_address[0], 
                        city: obj.location.display_address[1], 
                        state: obj.location.display_address[2], 
                        zipcode: obj.location.zip_code, 
                        category: obj.categories[0].title, 
                        rating: obj.rating, 
                        reviewCount: obj.review_count
                    }
                });

                return businesses;
            })
            .catch(err => console.error(err));
    }
}
    

export default Yelp;