initSidebarItems({"constant":[["AF_INET",""],["AF_INET6",""],["AF_LOCAL",""],["AF_UNIX",""],["INADDR_ANY",""],["INADDR_BROADCAST",""],["INADDR_NONE",""],["IPPROTO_IP",""],["IPPROTO_IPV6",""],["IPPROTO_TCP",""],["IPPROTO_UDP",""],["IPV6_ADD_MEMBERSHIP",""],["IPV6_DROP_MEMBERSHIP",""],["IP_ADD_MEMBERSHIP",""],["IP_DROP_MEMBERSHIP",""],["IP_MULTICAST_IF",""],["IP_MULTICAST_LOOP",""],["IP_MULTICAST_TTL",""],["MSG_CTRUNC",""],["MSG_DONTWAIT",""],["MSG_EOR",""],["MSG_OOB",""],["MSG_PEEK",""],["MSG_TRUNC",""],["SCM_RIGHTS",""],["SHUT_RD",""],["SHUT_RDWR",""],["SHUT_WR",""],["SOCK_CLOEXEC",""],["SOCK_DGRAM",""],["SOCK_NONBLOCK",""],["SOCK_RAW",""],["SOCK_RDM",""],["SOCK_SEQPACKET",""],["SOCK_STREAM",""],["SOL_SOCKET",""],["SO_ACCEPTCONN",""],["SO_BROADCAST",""],["SO_DEBUG",""],["SO_DONTROUTE",""],["SO_DONTTRUNC",""],["SO_ERROR",""],["SO_KEEPALIVE",""],["SO_LABEL",""],["SO_LINGER",""],["SO_NKE",""],["SO_NOADDRERR",""],["SO_NOSIGPIPE",""],["SO_NOTIFYCONFLICT",""],["SO_NP_EXTENSIONS",""],["SO_NREAD",""],["SO_NWRITE",""],["SO_OOBINLINE",""],["SO_PEERLABEL",""],["SO_RANDOMPORT",""],["SO_RCVBUF",""],["SO_RCVLOWAT",""],["SO_RCVTIMEO",""],["SO_RESTRICTIONS",""],["SO_RESTRICT_DENYIN",""],["SO_RESTRICT_DENYOUT",""],["SO_RESTRICT_DENYSET",""],["SO_REUSEADDR",""],["SO_REUSEPORT",""],["SO_REUSESHAREUID",""],["SO_SNDBUF",""],["SO_SNDLOWAT",""],["SO_SNDTIMEO",""],["SO_TIMESTAMP",""],["SO_TIMESTAMP_MONOTONIC",""],["SO_TYPE",""],["SO_WANTMORE",""],["SO_WANTOOBFLAG",""],["TCP_KEEPALIVE",""],["TCP_MAXSEG",""],["TCP_NODELAY",""]],"enum":[["AddressFamily",""],["ControlMessage","A type-safe wrapper around a single control message. More types may be added to this enum; do not exhaustively pattern-match it. Further reading"],["InetAddr",""],["IpAddr",""],["Shutdown",""],["SockAddr","Represents a socket address"],["SockLevel","The protocol level at which to get / set socket options. Used as an argument to `getsockopt` and `setsockopt`."],["SockType",""]],"fn":[["accept","Accept a connection on a socket"],["accept4","Accept a connection on a socket"],["bind","Bind a name to a socket"],["connect","Initiate a connection on a socket"],["getpeername","Get the address of the peer connected to the socket `fd`."],["getsockname","Get the current address to which the socket `fd` is bound."],["getsockopt","Get the current value for the requested socket option"],["listen","Listen for connections on a socket"],["recv","Receive data from a connection-oriented socket. Returns the number of bytes read"],["recvfrom","Receive data from a connectionless or connection-oriented socket. Returns the number of bytes read and the socket address of the sender."],["recvmsg","Receive message in scatter-gather vectors from a socket, and optionally receive ancillary data into the provided buffer. If no ancillary data is desired, use () as the type parameter."],["send","Send data to a connection-oriented socket. Returns the number of bytes read"],["sendmsg","Send data in scatter-gather vectors to a socket, possibly accompanied by ancillary data. Optionally direct the message at the given address, as with sendto."],["sendto",""],["setsockopt","Sets the value for the requested socket option"],["shutdown","Shut down part of a full-duplex connection."],["sockaddr_storage_to_addr",""],["socket","Create an endpoint for communication"],["socketpair","Create a pair of connected sockets"]],"mod":[["sockopt",""]],"struct":[["CmsgIterator",""],["CmsgSpace","A structure used to make room in a cmsghdr passed to recvmsg. The size and alignment match that of a cmsghdr followed by a T, but the fields are not accessible, as the actual types will change on a call to recvmsg."],["Ipv4Addr",""],["Ipv6Addr",""],["RecvMsg",""],["SockFlag",""],["UnixAddr","A wrapper around sockaddr_un. We track the length of sun_path, because it may not be null-terminated (unconnected and abstract sockets). Note that the actual sockaddr length is greater by size_of::<sa_family_t>()."],["in6_addr",""],["in_addr",""],["ip_mreq",""],["ipv6_mreq",""],["linger",""],["sockaddr",""],["sockaddr_in",""],["sockaddr_in6",""],["sockaddr_storage",""],["sockaddr_un",""]],"trait":[["GetSockOpt","Represents a socket option that can be accessed or set. Used as an argument to `getsockopt`"],["SetSockOpt","Represents a socket option that can be accessed or set. Used as an argument to `setsockopt`"]],"type":[["InAddrT",""],["IpMulticastTtl",""],["SockMessageFlags",""],["sa_family_t",""]]});