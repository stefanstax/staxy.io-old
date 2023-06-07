import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import StaxyLogo from "@/assets/images/staxy-logo.png";
import InBoundLink from "./InBoundLink";

const Footer = () => {
  return (
    <Box className="w-full bg-matte p-10 mx-auto">
      <Box className="max-w-[1140px] mx-auto text-white">
        <Grid container gap={10}>
          <Grid item xs={12} md={4} lg={2}>
            <Image width={125} height={65} src={StaxyLogo} alt="" />
            <Typography component="p" className="mt-4 text-[12px]">
              Community - Educational - Event Managment | Revenue 25x in the
              first 6-8 months.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            className="flex flex-col justify-start items-start"
          >
            <h3 className="font-black text-2xl">Legal</h3>
            <InBoundLink footerLink to="/legal/privacy-policy">
              Privacy Policy
            </InBoundLink>
            <InBoundLink footerLink to="/legal/terms-and-conditions">
              Terms and Conditions
            </InBoundLink>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            className="flex flex-col justify-start items-start"
          >
            <h3 className="font-black text-2xl">Scheduling</h3>
            <InBoundLink footerLink outSource to="https://calendly.com/staxy">
              Schedule a Zoom Meeting
            </InBoundLink>
            <InBoundLink footerLink outSource to="https://calendly.com/staxy">
              Schedule a Google Meet Meeting
            </InBoundLink>
            <InBoundLink footerLink outSource to="mailto:contact@staxy.io">
              Send an Email
            </InBoundLink>
            <InBoundLink footerLink outSource to="https://wa.me/+381691920124">
              Send WhatsApp message
            </InBoundLink>
          </Grid>
          <Grid item xs={12} gap={2} className="flex flex-col">
            <Typography component="span">
              Brought online with ❤️ from Belgrade.
            </Typography>
            <Typography component="span">
              This site does not track you.
            </Typography>
            <Typography component="span">MIT © 2023 - </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
