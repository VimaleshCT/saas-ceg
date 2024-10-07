/* eslint-disable react/prop-types */
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

// Style object for the modal box layout
const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  paddingTop: 8,
  paddingBottom: 2,
  paddingLeft: 4,
  paddingRight: 4,
  borderRadius: 2,
  color: "black",
  height: 500,
  overflowY: "scroll",
};

// RegistrationModal component that handles the display of event details and registration
const RegistrationModal = ({ event }) => {
  const [open, setOpen] = React.useState(false); // State to manage modal open/close
  const [description, setDesciption] = React.useState(); // State to store event description
  const [rules, setRules] = React.useState(); // State to store event rules

  // Function to handle opening the registration modal with the event description
  const handleRegisterOpen = () => {
    setDesciption(event.description); // Set the event description
    setOpen(true); // Open the modal
  };

  // Function to handle opening the modal with the event rules
  const handleRulesOpen = () => {
    const ruleArray = event.rules.split("."); // Split rules into an array
    console.log(ruleArray);
    setRules(ruleArray); // Set the event rules
    setOpen(true); // Open the modal
  };

  // Function to handle closing the modal
  const handleClose = () => {
    setOpen(false); // Close the modal
    setRules(null); // Clear the rules
  };

  // Function to handle event registration (to be implemented)
  const handleRegister = (event) => {
    console.log(event); // Placeholder for registration logic
  };

  return (
    <div className="w-[500px]">
      {/* Hidden buttons to show rules and register for the event */}
      <div className="hidden top-10 flex gap-x-5 justify-center items-center w-full">
        <Button
          size="small"
          className="px-4 w-full bg-blue-500 text-white"
          onClick={handleRulesOpen}
        >
          Rules
        </Button>
        <Button
          size="small"
          className="px-4 w-full bg-blue-500 text-white"
          onClick={handleRegisterOpen}
        >
          Register
        </Button>
      </div>

      {/* Modal component to display event details */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open} // Open/close state
        onClose={handleClose} // Function to close the modal
        closeAfterTransition // Closes the modal after the transition ends
        slots={{ backdrop: Backdrop }} // Backdrop for the modal
        slotProps={{
          backdrop: {
            timeout: 500, // Fade-out time for backdrop
          },
        }}
        sx={{
          overflowY: "auto", // Allow scrolling for overflow content
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="flex flex-col justify-center items-center">
            {/* Event title */}
            <h1
              style={{ fontSize: 40, marginBottom: 10 }}
              className="mt-20 text-4xl mb-6"
            >
              {event.eventName}
            </h1>
            {/* Event image */}
            <img
              src={event.image}
              className="h-72 w-[80%] mb-5"
              style={{ marginBottom: 20, width: 600, height: 280 }}
              alt={`${event.eventName} image`} // Added alt text for accessibility
            />
            {/* Event description */}
            <p
              className="text-center"
              style={{ marginBottom: 10, textAlign: "center" }}
            >
              {description}
            </p>
            {/* Display event rules if available */}
            {rules ? <h1 className="text-xl">Rules</h1> : null}
            {rules
              ? rules.map((rule, index) => <p key={index}>{rule}</p>)
              : null}

            {/* Register button */}
            <div className="w-24 rounded-md hover:bg-blue-500 py-2 mt-4">
              <Button
                size="small"
                className="w-full hover:text-white"
                onClick={() => handleRegister(event)}
              >
                Register
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default RegistrationModal;
