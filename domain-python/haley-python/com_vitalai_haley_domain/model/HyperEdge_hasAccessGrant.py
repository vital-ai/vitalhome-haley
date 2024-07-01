
from vital_ai_vitalsigns.model.properties.BooleanProperty import BooleanProperty
from vital_ai_vitalsigns.model.properties.DateTimeProperty import DateTimeProperty
from vital_ai_vitalsigns.model.properties.DoubleProperty import DoubleProperty
from vital_ai_vitalsigns.model.properties.FloatProperty import FloatProperty
from vital_ai_vitalsigns.model.properties.GeoLocationProperty import GeoLocationProperty
from vital_ai_vitalsigns.model.properties.IntegerProperty import IntegerProperty
from vital_ai_vitalsigns.model.properties.LongProperty import LongProperty
from vital_ai_vitalsigns.model.properties.OtherProperty import OtherProperty
from vital_ai_vitalsigns.model.properties.StringProperty import StringProperty
from vital_ai_vitalsigns.model.properties.TruthProperty import TruthProperty
from vital_ai_vitalsigns.model.properties.URIProperty import URIProperty
from vital_ai_vitalsigns.model.VITAL_HyperEdge import VITAL_HyperEdge


class HyperEdge_hasAccessGrant(VITAL_HyperEdge):
    _allowed_properties = [
        {'uri': 'http://vital.ai/ontology/haley#hasAccessGrantMemberURIs', 'prop_class': URIProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasAccessGrantProviderAccount', 'prop_class': URIProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasAccessGrantProviderBot', 'prop_class': URIProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasAccessGrantProviderLogin', 'prop_class': URIProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasAccessGrantStatusURI', 'prop_class': URIProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasAccessGrantType', 'prop_class': URIProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasAccessObjectTypes', 'prop_class': URIProperty}, 
    ]

    @classmethod
    def get_allowed_properties(cls):
        return super().get_allowed_properties() + HyperEdge_hasAccessGrant._allowed_properties

    @classmethod
    def get_class_uri(cls) -> str:
        return 'http://vital.ai/ontology/haley#HyperEdge_hasAccessGrant'


