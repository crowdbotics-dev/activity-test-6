import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_follow_list = createAsyncThunk(
  "follows/api_v1_follow_list",
  async payload => {
    const response = await apiService.api_v1_follow_list(payload)
    return response.data
  }
)
export const api_v1_follow_create = createAsyncThunk(
  "follows/api_v1_follow_create",
  async payload => {
    const response = await apiService.api_v1_follow_create(payload)
    return response.data
  }
)
export const api_v1_follow_retrieve = createAsyncThunk(
  "follows/api_v1_follow_retrieve",
  async payload => {
    const response = await apiService.api_v1_follow_retrieve(payload)
    return response.data
  }
)
export const api_v1_follow_update = createAsyncThunk(
  "follows/api_v1_follow_update",
  async payload => {
    const response = await apiService.api_v1_follow_update(payload)
    return response.data
  }
)
export const api_v1_follow_partial_update = createAsyncThunk(
  "follows/api_v1_follow_partial_update",
  async payload => {
    const response = await apiService.api_v1_follow_partial_update(payload)
    return response.data
  }
)
export const api_v1_follow_destroy = createAsyncThunk(
  "follows/api_v1_follow_destroy",
  async payload => {
    const response = await apiService.api_v1_follow_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const followsSlice = createSlice({
  name: "follows",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_follow_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_follow_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_follow_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_follow_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_follow_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_follow_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_follow_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_follow_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_follow_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_follow_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_follow_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_follow_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_follow_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_follow_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_follow_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_follow_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_follow_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_follow_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_follow_list,
  api_v1_follow_create,
  api_v1_follow_retrieve,
  api_v1_follow_update,
  api_v1_follow_partial_update,
  api_v1_follow_destroy,
  slice: followsSlice
}
