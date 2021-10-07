

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
    content(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divID), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: mappable.location
        });

        const infoWindow = new google.maps.InfoWindow({
            content: mappable.content()
        });

        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker);
        })
    }


}