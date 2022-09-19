import Stack from '@mui/material/Stack';

function HomeAdmin() {
    return (
      <div className="container_margin">
        <Stack
        direction={{ xs: "row"}}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
      </div>
    );
  }
  
  export default HomeAdmin;