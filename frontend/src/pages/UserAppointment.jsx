import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Space, Spin, Avatar, Row, Col, Modal, Input, message } from 'antd';
import { CalendarOutlined, ClockCircleOutlined, UserOutlined, MedicineBoxOutlined, VideoCameraOutlined, DeleteOutlined } from '@ant-design/icons';

import { useAuth } from '@/contexts/authContext'
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, deleteDoc, updateDoc } from "firebase/firestore";

const { Title, Text } = Typography;

const firestore = getFirestore();

const UserAppointment = () => {
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      patient: 'John Doe',
      patientImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      doctor: 'Dr. Jane Smith',
      doctorImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      specialty: 'Cardiology',
      date: '2024-10-20',
      time: '10:00 AM',
    },
    {
      id: '2',
      patient: 'Alice Johnson',
      patientImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      doctor: 'Dr. Bob Brown',
      doctorImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      specialty: 'Dermatology',
      date: '2023-06-16',
      time: '2:30 PM',
    },
    {
      id: '3',
      patient: 'Emma Wilson',
      patientImage: 'https://randomuser.me/api/portraits/women/3.jpg',
      doctor: 'Dr. Michael Lee',
      doctorImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      specialty: 'Pediatrics',
      date: '2023-06-17',
      time: '11:15 AM',
    },
    {
      id: '4',
      patient: 'John Doe',
      patientImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      doctor: 'Dr. Jane Smith',
      doctorImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      specialty: 'Cardiology',
      date: '2024-10-20',
      time: '10:00 AM',
    },
    {
      id: '5',
      patient: 'Alice Johnson',
      patientImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      doctor: 'Dr. Bob Brown',
      doctorImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      specialty: 'Dermatology',
      date: '2023-06-16',
      time: '2:30 PM',
    },
    {
      id: '6',
      patient: 'Emma Wilson',
      patientImage: 'https://randomuser.me/api/portraits/women/3.jpg',
      doctor: 'Dr. Michael Lee',
      doctorImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      specialty: 'Pediatrics',
      date: '2023-06-17',
      time: '11:15 AM',
    },
  ]);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({ role: 'patient' });
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDelayModalVisible, setIsDelayModalVisible] = useState(false);
  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [delayTime, setDelayTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null)
  const [cancelReason, setCancelReason] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleJoinRoom = (appointmentId) => {
    navigate(`/room/${appointmentId}`);
    window.location.reload();
  };

  const handleCreateMeet = async (appointmentId) => {
    const roomLink = `https://yourdomain.com/room/${appointmentId}`;
    message.success('Room created and link sent to patient');
  };
  const handleCancelAppointment = async (appointmentId) => {
    setIsCancelModalVisible(true);
    setSelectedAppointmentId(appointmentId);
  };

  const handleConfirmCancel = async () => {
    if (!cancelReason) {
      message.error('Please provide a reason for cancellation.');
      return;
    }

    // Proceed with canceling the appointment
    setAppointments(appointments.filter(app => app.id !== selectedAppointmentId));
    message.success('Appointment cancelled successfully');
    
    // Close modal and reset state
    setIsCancelModalVisible(false);
    setCancelReason('');
  };

  const handleSubmitCancellation = async () => {
    if (!reason) {
      message.error('Please provide a reason for cancellation.');
      return;
    }
    
    // Perform appointment cancellation logic here
    setAppointments(appointments.filter(app => app.id !== selectedAppointmentId));
    message.success('Appointment cancelled successfully');

    // Reset dialog state
    setIsDialogOpen(false);
    setReason('');
  };

  const handleDelayAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setIsDelayModalVisible(true);
  };

  const handleDelayConfirm = async () => {
    if (!delayTime) {
      message.error('Please enter delay time');
      return;
    }
    const newDate = new Date(selectedAppointment.date);
    newDate.setMinutes(newDate.getMinutes() + parseInt(delayTime));
    setAppointments(appointments.map(app => 
      app.id === selectedAppointment.id ? {...app, date: newDate.toISOString().split('T')[0]} : app
    ));
    setIsDelayModalVisible(false);
    setDelayTime('');
    message.success('Appointment delayed successfully');
  };

  const calculateTimeRemaining = (appointmentDate, appointmentTime) => {
    const [year, month, day] = appointmentDate.split('-');
    const [time, period] = appointmentTime.split(' ');
    const [hours, minutes] = time.split(':');
    
    let appointmentDateTime = new Date(year, month - 1, day, 
      period === 'PM' ? parseInt(hours) + 12 : parseInt(hours), 
      parseInt(minutes)
    );

    const timeDiff = appointmentDateTime - currentTime;
    
    if (timeDiff <= 0) return '00:00:00';

    const days_remaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours_remaining = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes_remaining = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds_remaining = Math.floor((timeDiff % (1000 * 60)) / 1000);

    if (days_remaining > 0) {
        return `${days_remaining}d ${hours_remaining.toString().padStart(2, '0')}:${minutes_remaining.toString().padStart(2, '0')}:${seconds_remaining.toString().padStart(2, '0')}`;
    } else {
        return `${hours_remaining.toString().padStart(2, '0')}:${minutes_remaining.toString().padStart(2, '0')}:${seconds_remaining.toString().padStart(2, '0')}`;
    }
  };

  const renderAppointmentCard = (appointment) => {
    if (currentUser && currentUser.role === 'doctor') {
      return (
        <div key={appointment.id} className="bg-white rounded-2xl shadow-md p-3 mb-4 flex justify-between items-center">
          <Space align="center" size="large">
            <Avatar size={120} src={appointment.patientImage} />
            <Space direction="vertical">
              <Text strong className="text-xl"><UserOutlined /> Patient: {appointment.patient}</Text>
              <Text className="text-lg"><MedicineBoxOutlined /> {appointment.specialty}</Text>
              <Text className="text-lg"><CalendarOutlined /> {appointment.date}</Text>
              <Text className="text-lg"><ClockCircleOutlined /> {appointment.time}</Text>
            </Space>
          </Space>
          <Space direction="vertical" align="end">
            <Button type="primary" size="large" icon={<VideoCameraOutlined />} onClick={() => handleCreateMeet(appointment.id)} className="bg-purple-600 hover:bg-purple-700 text-lg h-12 px-6">
              Create Meet
            </Button>
            <Button type="default" size="large" icon={<ClockCircleOutlined />} onClick={() =>{ setIsDelayModalVisible(true); handleDelayAppointment(appointment)}} className="text-lg h-12 px-6">
              Delay Appointment
            </Button>

            
            <Button type="danger" size="large" icon={<DeleteOutlined />} onClick={() => {setIsCancelModalVisible(true); handleCancelAppointment(appointment.id) }} className="text-lg h-12 px-6">
              Cancel Appointment
            </Button>
            <Text type="secondary" className="text-lg">{calculateTimeRemaining(appointment.date, appointment.time)}</Text>
          </Space>
        </div>
      );
    } else {
      return (
        <div key={appointment.id} className="bg-white rounded-2xl shadow-md p-3 mb-4 flex justify-between items-center">
          <Space align="center" size="large">
            <Avatar size={120} src={appointment.doctorImage} />
            <Space direction="vertical">
              <Text strong className="text-xl"><UserOutlined /> {appointment.doctor}</Text>
              <Text className="text-lg"><MedicineBoxOutlined /> {appointment.specialty}</Text>
              <Text className="text-lg"><CalendarOutlined /> {appointment.date}</Text>
              <Text className="text-lg"><ClockCircleOutlined /> {appointment.time}</Text>
            </Space>
          </Space>
          <Space direction="vertical" align="end">
            <Button type="primary" size="large" icon={<VideoCameraOutlined />} onClick={() => handleJoinRoom(appointment.id)} className="bg-purple-600 hover:bg-purple-700 text-lg h-12 px-6">
              Join Room
            </Button>
            <Button type="danger" size="large" icon={<DeleteOutlined />} onClick={() => handleCancelAppointment(appointment.id)} className="bg-red-500 hover:bg-red-600 text-lg h-12 px-6">
              Cancel
            </Button>
            <Text type="secondary" className="text-lg">{calculateTimeRemaining(appointment.date, appointment.time)}</Text>
          </Space>
        </div>
      );
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="w-full p-5 bg-purple-50 min-h-screen">
      <Row gutter={24} className="min-h-screen">
        <Col xs={24} lg={13}>
          <Title level={2} className="text-center text-purple-900 text-4xl">
            Your {currentUser && currentUser.role === 'doctor' ? 'Scheduled' : 'Booked'} Appointments
          </Title>
          {currentUser ? (
            <div className="max-h-[calc(100vh-50px)] overflow-y-auto pr-3" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style>{`
                .max-h-\\[calc\\(100vh-50px\\)]::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {appointments.length > 0 ? (
                appointments.map(renderAppointmentCard)
              ) : (
                <Text className="text-center block">No appointments found.</Text>
              )}
            </div>
          ) : (
            <Text className="text-center block">Please log in to view your appointments.</Text>
          )}
        </Col>
        <Col xs={24} lg={11} className="h-full right-0 ">
          <div className="h-full w-[550px] flex items-center justify-center">
            <img src="https://img.freepik.com/free-vector/appointment-booking-with-calendar_52683-39658.jpg?ga=GA1.1.1638672558.1697814773&semt=ais_hybrid" alt="Side Image" className="w-full h-auto max-h-[80vh] object-contain rounded-3xl shadow-lg" />
          </div>
        </Col>
      </Row>
      {/* Modal for Delaying Appointment */}
        
        <Modal  className="rounded-xl bg-red-100"
        title={
          <div className="flex items-center">
            <ClockCircleOutlined className="text-purple-600 text-xl mr-2" />
            <span className="text-purple-600">Delay Appointment</span>
          </div>
        }
        open={isDelayModalVisible}
        onOk={handleDelayConfirm}
        onCancel={() => setIsDelayModalVisible(false)}
        okText="Confirm Delay"
        cancelText="Cancel"
        okButtonProps={{
          className: 'bg-purple-600 text-white hover:bg-purple-700 rounded-md',
        }}
        cancelButtonProps={{
          className: 'hover:text-red-600 text-gray-500',
        }}
      >
        <div className="space-y-2">
          <Input
            placeholder="Enter delay time in minutes"
            value={delayTime}
            onChange={(e) => setDelayTime(e.target.value)}
            className="rounded-md border-2 border-purple-300 focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </Modal>

      {/* Modal for Cancelling Appointment */}
      <Modal 
        title={
          <div className="flex items-center">
            <DeleteOutlined className="text-red-600 text-xl mr-2" />
            <span className="text-red-600">Cancel Appointment</span>
          </div>
        }
        open={isCancelModalVisible}
        onOk={handleConfirmCancel}
        onCancel={() => setIsCancelModalVisible(false)}
        okText="Confirm Cancellation"
        cancelText="Go Back"
        okButtonProps={{
          className: 'bg-red-600 text-white hover:bg-red-700 rounded-md',
        }}
        cancelButtonProps={{
          className: 'hover:text-red-600 text-gray-500',
        }}
      >
        <div className="space-y-2">
          <Input
            placeholder="Enter reason for cancellation"
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
            className="rounded-md border-2 border-red-300 focus:ring-2 focus:ring-red-500"
          />
        </div>
      </Modal>
    </div>
  );
};

export default UserAppointment;