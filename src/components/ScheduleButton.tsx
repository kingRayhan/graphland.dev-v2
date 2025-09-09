import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { CalendarRangeIcon } from "lucide-react";

const ScheduleButton = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Button
      data-cal-link="graph-land-x1ioyx"
      data-cal-config='{"layout":"month_view"}'
    >
      <CalendarRangeIcon />
      Schedule a meeting
    </Button>
  );
};

export default ScheduleButton;
