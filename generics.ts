class Hotel {
	private freeRoomsCount: number
	constructor(freeRoomsCount: number) {
		this.freeRoomsCount = freeRoomsCount
	}
	public takeARoom(): void {
		this.freeRoomsCount--
	}
	public isRoomAvailable(): boolean {
		return this.freeRoomsCount > 0
	}
}
