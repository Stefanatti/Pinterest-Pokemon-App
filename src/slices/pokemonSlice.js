import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    loading: true,
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setPokemons, setLoading, setError } = pokemonSlice.actions;

export default pokemonSlice.reducer;
