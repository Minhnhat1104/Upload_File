import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MyDropzone from "./components/MyDropzone";
import { Box, Button, Stack } from "@mui/material";
import "./app.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack sx={{ width: "100%", height: "100%" }}>
        <Stack spacing={1} sx={{ m: "auto", width: 600 }}>
          <MyDropzone />
        </Stack>
      </Stack>
    </QueryClientProvider>
  );
}

export default App;
