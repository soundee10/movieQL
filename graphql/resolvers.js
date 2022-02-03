const nicolas = {
    name: "Nico",
    age: 19,
    gender: "male"
};


const resolvers ={
    Query:{
        person: ()=> nicolas
    }
}

export default resolvers