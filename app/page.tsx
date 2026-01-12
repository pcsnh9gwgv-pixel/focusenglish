import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirección temporal a la página "Próximamente"
  redirect('/proximamente');
}
