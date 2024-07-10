// import React, { useState, useContext } from "react";
// import "../static/create.css";
// import toast, { Toaster } from "react-hot-toast";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../src/firebase/firebaseConfig";
// await addDoc(collection(db, "recipes"), newRecipe);

// import { GlobalContext } from "../context/useContextGlobal";

// function Create() {
//   const { user } = useContext(GlobalContext);
//   const [category, setCategory] = useState("");
//   const [ingredient, setIngredient] = useState("");
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [img, setImg] = useState("");
//   const [cookingTime, setCookingTime] = useState("");
//   const [imgs, setImgs] = useState([]);
//   const [ingredients, setIngredients] = useState([]);

//   const addIngredient = (e) => {
//     e.preventDefault();

//     if (ingredient.trim() !== "") {
//       if (!ingredients.includes(ingredient)) {
//         setIngredients((prev) => [...prev, ingredient]);
//         toast.success("Ingredient successfully added");
//       } else {
//         toast.error("This ingredient is already added");
//       }
//       setIngredient("");
//     } else {
//       toast.error("Please enter an ingredient");
//     }
//   };

//   const addImg = (e) => {
//     e.preventDefault();

//     if (img.trim() !== "") {
//       if (imgs.length < 3) {
//         if (!imgs.includes(img)) {
//           setImgs((prev) => [...prev, img]);
//           toast.success((imgs.length + 1) + " image(s) added");
//         } else {
//           toast.error("This image URL is already added");
//         }
//       } else {
//         toast.error("You can add up to 3 images only");
//       }
//       setImg("");
//     } else {
//       toast.error("Please enter an image URL");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const price = ingredients.length * 8;

//     if (
//       name.trim() !== "" &&
//       description.trim() !== "" &&
//       imgs.length > 0 &&
//       cookingTime.trim() !== "" &&
//       category.trim() !== "" &&
//       ingredients.length > 0
//     ) {
//       const newRecipe = {
//         name,
//         description,
//         category,
//         img: imgs,
//         cookingTime,
//         ingredients,
//         price,
//         uid: user.uid,
//       };

//       try {
//         await addDoc(collection(db, "recipes"), newRecipe);
//         toast.success("Recipe successfully created!");
//         window.location.href = "/";
//       } catch (error) {
//         toast.error("Error adding document: ", error.message);
//       }
//     } else {
//       toast.error("Please fill out all fields");
//     }
//   };

//   return (
//     <div className="min-h-screen grid place-items-center">
//       <div className="max-w-[550px] w-full">
//         <h1 className="text-3xl text-center font-bold mt-10">
//           Create Your New Fast Food
//         </h1>

//         <form
//           className="flex items-center flex-col gap-1 w-full mt-5"
//           onSubmit={handleSubmit}
//         >
//           <label className="form-control w-full mt-10">
//             <div>
//               <div className="input1-form">
//                 <input
//                   className="input1 w-full"
//                   name="text"
//                   type="text"
//                   required
//                   onChange={(e) => setName(e.target.value)}
//                   value={name}
//                 />
//                 <label className="textUser">Name of Fast food</label>
//               </div>
//             </div>
//           </label>

//           <label className="form-control w-full mt-5">
//             <div className="input1-form">
//               <input
//                 className="input1 w-full"
//                 name="text"
//                 type="number"
//                 required
//                 onChange={(e) => setCookingTime(e.target.value)}
//                 value={cookingTime}
//               />
//               <label className="textUser">Cooking Time</label>
//             </div>
//           </label>
//           <label className="form-control w-full mt-10">
//             <div>
//               <div className="input1-form">
//                 <input
//                   className="input1 w-full"
//                   name="text"
//                   type="text"
//                   required
//                   onChange={(e) => setCategory(e.target.value)}
//                   value={category}
//                 />
//                 <label className="textUser">Category of your Food</label>
//               </div>
//             </div>
//           </label>

//           <label className="form-control w-full">
//             <div className="label">
//               <span className="label-text">Ingredients</span>
//             </div>
//             <div className="input2-container">
//               <input
//                 type="text"
//                 placeholder="Type here"
//                 className="input input-bordered w-full"
//                 onChange={(e) => setIngredient(e.target.value)}
//                 value={ingredient}
//               />
//               <button className=" btn btn-primary" onClick={addIngredient}>
//                 Add
//               </button>
//             </div>
//             <div className="mt-1">
//               <p className="opacity-70">
//                 Ingredients:{" "}
//                 {ingredients.map((ing) => (
//                   <span key={ing} className="badge badge-outline">
//                     {ing}
//                   </span>
//                 ))}
//               </p>
//             </div>
//           </label>
//           <Toaster />

//           <label className="form-control w-full">
//             <div className="label">
//               <span className="label-text">Images</span>
//             </div>
//             <div className="input2-container">
//               <input
//                 type="text"
//                 placeholder="Add Img URLs"
//                 className="input input-bordered w-full"
//                 onChange={(e) => setImg(e.target.value)}
//                 value={img}
//               />
//               <button className="btn btn-primary" onClick={addImg}>
//                 Add
//               </button>
//             </div>
//           </label>

//           <label className="form-control w-full">
//             <div className="label">
//               <span className="label-text">Description</span>
//             </div>
//             <textarea
//             style={{resize: "none"}}
//               className="textarea textarea-bordered h-24"
//               placeholder="Write Description"
//               required
//               onChange={(e) => setDescription(e.target.value)}
//               value={description}
//             ></textarea>
//           </label>

//           <button className="btn btn-neutral w-full my-6">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Create;
import React, { useState, useContext } from "react";
import "../static/create.css";
import toast, { Toaster } from "react-hot-toast";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../src/firebase/firebaseConfig";
import { GlobalContext } from "../context/useContextGlobal";

function Create() {
  const { user } = useContext(GlobalContext);
  const [category, setCategory] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [imgs, setImgs] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (e) => {
    e.preventDefault();

    if (ingredient.trim() !== "") {
      if (!ingredients.includes(ingredient)) {
        setIngredients((prev) => [...prev, ingredient]);
        toast.success("Ingredient successfully added");
      } else {
        toast.error("This ingredient is already added");
      }
      setIngredient("");
    } else {
      toast.error("Please enter an ingredient");
    }
  };

  const addImg = (e) => {
    e.preventDefault();

    if (img.trim() !== "") {
      if (imgs.length < 3) {
        if (!imgs.includes(img)) {
          setImgs((prev) => [...prev, img]);
          toast.success((imgs.length + 1) + " image(s) added");
        } else {
          toast.error("This image URL is already added");
        }
      } else {
        toast.error("You can add up to 3 images only");
      }
      setImg("");
    } else {
      toast.error("Please enter an image URL");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const price = ingredients.length * 8;

    if (
      name.trim() !== "" &&
      description.trim() !== "" &&
      imgs.length > 0 &&
      cookingTime.trim() !== "" &&
      category.trim() !== "" &&
      ingredients.length > 0
    ) {
      const newRecipe = {
        name,
        description,
        category,
        img: imgs,
        cookingTime,
        ingredients,
        price,
        uid: user.uid,
      };

      try {
        await addDoc(collection(db, "recipes"), newRecipe); // Ensure collection name is "recipes"
        toast.success("Recipe successfully created!");
        window.location.href = "/";
      } catch (error) {
        toast.error("Error adding document: ", error.message);
      }
    } else {
      toast.error("Please fill out all fields");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-[550px] w-full">
        <h1 className="text-3xl text-center font-bold mt-10">
          Create Your New Fast Food
        </h1>

        <form
          className="flex items-center flex-col gap-1 w-full mt-5"
          onSubmit={handleSubmit}
        >
          <label className="form-control w-full mt-10">
            <div>
              <div className="input1-form">
                <input
                  className="input1 w-full"
                  name="text"
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <label className="textUser">Name of Fast food</label>
              </div>
            </div>
          </label>

          <label className="form-control w-full mt-5">
            <div className="input1-form">
              <input
                className="input1 w-full"
                name="text"
                type="number"
                required
                onChange={(e) => setCookingTime(e.target.value)}
                value={cookingTime}
              />
              <label className="textUser">Cooking Time</label>
            </div>
          </label>
          <label className="form-control w-full mt-10">
            <div>
              <div className="input1-form">
                <input
                  className="input1 w-full"
                  name="text"
                  type="text"
                  required
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                />
                <label className="textUser">Category of your Food</label>
              </div>
            </div>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Ingredients</span>
            </div>
            <div className="input2-container">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                onChange={(e) => setIngredient(e.target.value)}
                value={ingredient}
              />
              <button className=" btn btn-primary" onClick={addIngredient}>
                Add
              </button>
            </div>
            <div className="mt-1">
              <p className="opacity-70">
                Ingredients:{" "}
                {ingredients.map((ing) => (
                  <span key={ing} className="badge badge-outline">
                    {ing}
                  </span>
                ))}
              </p>
            </div>
          </label>
          <Toaster />

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Images</span>
            </div>
            <div className="input2-container">
              <input
                type="text"
                placeholder="Add Img URLs"
                className="input input-bordered w-full"
                onChange={(e) => setImg(e.target.value)}
                value={img}
              />
              <button className="btn btn-primary" onClick={addImg}>
                Add
              </button>
            </div>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              style={{ resize: "none" }}
              className="textarea textarea-bordered h-24"
              placeholder="Write Description"
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </label>

          <button className="btn btn-neutral w-full my-6">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
