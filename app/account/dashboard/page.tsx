import { Box } from "@mui/material"
import StatusCard from "@/app/components/Dashboard/Student/StatusCard"
import CalendarEvents from "@/app/components/Dashboard/Student/CalendarEvents"
import CourseFilterView from "@/app/components/Dashboard/Student/CourseFilterView"
import HomeworkView from "@/app/components/Dashboard/Student/HomeworkView"

const Dashboard = () => {
    return(
    <Box>
         <Box className="px-4 md:px-0 -mt-4">
            <Box my={3} className="flex flex-col md:flex-row gap-y-4 gap-x-6">
              <StatusCard />
            </Box>

            <Box className="flex flex-col md:flex-row md:gap-x-6">
              <Box className="md:w-2/3 flex flex-col gap-y-6">
                <CalendarEvents />
                <CourseFilterView />
              </Box>
              <HomeworkView />
            </Box>
          </Box>
    </Box>
    )
}

export default Dashboard