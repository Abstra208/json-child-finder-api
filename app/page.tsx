export default function Home() {
  const makeApiCall = async () => {
    await fetch("/api/hello", {
      method: "POST"
    })
  }
}