import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_recipecollection_list = createAsyncThunk(
  "recipeCollections/api_v1_recipecollection_list",
  async payload => {
    const response = await apiService.api_v1_recipecollection_list(payload)
    return response.data
  }
)
export const api_v1_recipecollection_create = createAsyncThunk(
  "recipeCollections/api_v1_recipecollection_create",
  async payload => {
    const response = await apiService.api_v1_recipecollection_create(payload)
    return response.data
  }
)
export const api_v1_recipecollection_retrieve = createAsyncThunk(
  "recipeCollections/api_v1_recipecollection_retrieve",
  async payload => {
    const response = await apiService.api_v1_recipecollection_retrieve(payload)
    return response.data
  }
)
export const api_v1_recipecollection_update = createAsyncThunk(
  "recipeCollections/api_v1_recipecollection_update",
  async payload => {
    const response = await apiService.api_v1_recipecollection_update(payload)
    return response.data
  }
)
export const api_v1_recipecollection_partial_update = createAsyncThunk(
  "recipeCollections/api_v1_recipecollection_partial_update",
  async payload => {
    const response = await apiService.api_v1_recipecollection_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_recipecollection_destroy = createAsyncThunk(
  "recipeCollections/api_v1_recipecollection_destroy",
  async payload => {
    const response = await apiService.api_v1_recipecollection_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const recipeCollectionsSlice = createSlice({
  name: "recipeCollections",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_recipecollection_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_recipecollection_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recipecollection_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recipecollection_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_recipecollection_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recipecollection_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recipecollection_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_recipecollection_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recipecollection_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recipecollection_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_recipecollection_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recipecollection_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_recipecollection_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_recipecollection_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_recipecollection_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_recipecollection_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_recipecollection_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recipecollection_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_recipecollection_list,
  api_v1_recipecollection_create,
  api_v1_recipecollection_retrieve,
  api_v1_recipecollection_update,
  api_v1_recipecollection_partial_update,
  api_v1_recipecollection_destroy,
  slice: recipeCollectionsSlice
}
