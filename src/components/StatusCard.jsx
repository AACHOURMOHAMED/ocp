import { Box, Typography } from "@mui/material";

export default function StatusCard({
  icon,
  title,
  value,
  percent = "",
  sx,
  lgMaxWidth = "175px",
}) {
  return (
    <Box
      sx={{
        p: "20px 22px",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        gap: "5px",
        background: "#A6F566",
        boxShadow: "0 2px 10px -2px hsla(0, 31%, 27%, 19%)",
        borderRadius: "28px",
        maxWidth: {
          xs: "auto",
          lg: lgMaxWidth,
          xl: "300px",
        },
        width: {
          xs: "100%",
        },
        ...sx,
      }}
    >
      <Box className="flex flex-col gap-1">
        <Typography
          className="status-title"
          sx={{
            color: "#000000",
            fontWeight: "400",
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "16px",
              lg: "16px",
              xl: "24px",
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          className="nb-value"
          sx={{
            color: "#000",
            fontWeight: "500",
            fontSize: {
              xs: "18px",
              sm: "20px",
              md: "18px",
              lg: "18px",
              xl: "26px",
            },
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}
