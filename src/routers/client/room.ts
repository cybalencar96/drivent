import { Router } from "express";
import room from "@/controllers/client/room";

const router = Router();

router.get("/:hotelId", room.getRoomsByHotelId);
router.get("/available/:hotelId", room.getAvailableRooms);
router.get("/details/:hotelId", room.getRoomDetails);

export default router;
