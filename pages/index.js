import { Container, Typography, Box } from '@mui/material';
import Link from '../src/Link';

export default function Index() {
    return (
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js & Material Ui Starter
            </Typography>
            <Link href="/about" color="secondary">
              Esimerkkilinkki
            </Link>
          </Box>
        </Container>
      );
}
