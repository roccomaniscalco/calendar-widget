import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "~/AppLayout"
import CalendarPage from "~/pages/CalendarPage"
import DiscussionsPage from "~/pages/DiscussionsPage"
import HomePage from "~/pages/HomePage"
import RewardsPage from "~/pages/RewardsPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="discussions" element={<DiscussionsPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="calendar" element={<CalendarPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
