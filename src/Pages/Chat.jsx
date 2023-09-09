// import React, { Component } from "react";
// import io from "socket.io-client";

// class Chat extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: "",
//       messages: [],
//     };
//     this.socket = io.connect("/");

//     this.sendMessage = this.sendMessage.bind(this);
//   }

//   sendMessage() {
//     this.socket.emit("chat", this.state.message);
//     this.setState({ message: "" });
//   }

//   componentDidMount() {
//     this.socket.on("chatShow", (msg) => {
//       this.setState((prevState) => ({
//         messages: [...prevState.messages, msg],
//       }));
//     });
//   }

//   render() {
//     const { message, messages } = this.state;

//     return (
//       <div className="mx-96 text-center">
//         <h1 className="mt-12 text-center font-bold text-3xl">
//           Chat for Collaboration
//         </h1>
//         <div>
//           {messages.map((msg, index) => (
//             <p key={index}>{msg}</p>
//           ))}
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered input-accent w-full max-w-xs"
//             value={message}
//             onChange={(e) => this.setState({ message: e.target.value })}
//           />
//           <button className="mt-14 btn btn-primary" onClick={this.sendMessage}>
//             Send
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Chat;

// // import { useState, useEffect } from "react";
// // import io from "socket.io-client";

// // const Chat = () => {
// //   const socket = io.connect("/");
// //   console.log(socket);

// //   const [message, setMessage] = useState("");
// //   const [messages, setMessages] = useState([]);
// //   console.log(messages);
// //   console.log(message);

// //   const sendMessage = () => {
// //     socket.emit("chat", message);
// //     setMessage("");
// //   };

// //   useEffect(() => {
// //     socket.on("chatShow", (msg) => {
// //       setMessages((prevMessages) => [...prevMessages, msg]);
// //     });
// //   }, []);

// //   return (
// //     <div className="mx-96 text-center">
// //       <h1 className="mt-12 text-center font-bold text-3xl">
// //         Chat for Collaboration
// //       </h1>
// //       <div>
// //         {messages.map((msg, index) => (
// //           <p key={index}>{msg}</p>
// //         ))}
// //       </div>
// //       <div>
// //         <input
// //           type="text"
// //           placeholder="Type here"
// //           className="input input-bordered input-accent w-full max-w-xs"
// //           value={message}
// //           onChange={(e) => setMessage(e.target.value)}
// //         />
// //         <button className="mt-14 btn btn-primary" onClick={sendMessage}>
// //           Send
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Chat;
