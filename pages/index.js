import LandingPage from "../src/components/landing_page/LandingPage"

export default function Home() {
  return (
    <div>


      <main>
        <ErrorBoundary>

          <LandingPage />
        </ErrorBoundary>

      </main>

    </div>
  )
}
