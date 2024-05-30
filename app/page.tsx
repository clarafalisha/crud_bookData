import { BookButton } from "@/components/buttons";
export default function Home() {
  return (
    <div style={styles.container}>
      <BookButton />
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};